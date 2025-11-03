import React, { useState } from "react";
import { Table } from "react-bootstrap";

function CalculadoraIntegral() {

    //Para entradas
    const [panelW, setPanelW] = useState(450);
    const [paneles, setPaneles] = useState(8);
    const [precioInversor, setPrecioInversor] = useState(650000);
    const [precioBateria, setPrecioBateria] = useState(320000);
    const [cantidadBaterias, setCantidadBaterias] = useState(1);
    const [precioEstructura, setPrecioEstructura] = useState(180000);
    const [instalacionBase, setInstalacionBase] = useState(350000);
    const [peso, setPeso] = useState(90);

    //Para selects
    const [techo, setTecho] = useState("teja");
    const [region, setRegion] = useState("RM");
    const [complejidad, setComplejidad] = useState("baja");
    const [subsidio, setSubsidio] = useState("ninguno");
    const [envio, setEnvio] = useState("Estandar");
    const [garantia, setGarantia] = useState("12");
    const [planPago, setPlanPago] = useState("contado");
    const [tipoPie, setTipoPie] = useState("porcentaje");
    const [valorPie, setValorPie] = useState("10");

    //Resultado
    const [resultado, setResultado] = useState(null);

    // --- Cálculos base ---

    const calcular = () => {
        const potencia = (panelW * paneles) / 1000;
        const subtotalEquipos =
            Number(precioInversor) +
            Number(precioEstructura) +
            Number(precioBateria) * Number(cantidadBaterias || 0);

        const recargos = {
            teja: 0.05,
            zinc: 0.02,
            hormigon: 0.07,
        };

        const recargoTecho = subtotalEquipos * recargos[techo];

        const complejidades = {
            baja: 0,
            media: 0.08,
            alta: 0.15,
        };

        const instalacionFinal =
            Number(instalacionBase) +
            Number(instalacionBase) * complejidades[complejidad];

        const subsidios = {
            ninguno: 0,
            residencial: -0.08,
            pyme: -0.05,
        };

        const subsidioValor = subtotalEquipos * subsidios[subsidio];

        const envioBase = { RM: 5000, Norte: 9000, Sur: 10000, Austral: 15000 }[region];
        let costoEnvio = envioBase + peso * 700;
        if (envio == "expres") costoEnvio *= 1.2;

        const garantiaValor =
            subtotalEquipos *
            (Number(garantia) === 12
                ? 0.02
                : Number(garantia) === 24
                    ? 0.04
                    : 0.06);

        const subtotalConRecargos =
            subtotalEquipos + recargoTecho + subsidioValor;

        const iva = 0.19 * (subtotalConRecargos + instalacionFinal);
        const totalAntesFinanciar =
            subtotalConRecargos + instalacionFinal + iva + costoEnvio + garantiaValor;

        const tasas = {
            contado: { tasa: 0, cuotas: 1 },
            "6": { tasa: 0.012, cuotas: 6 },
            "12": { tasa: 0.011, cuotas: 12 },
            "24": { tasa: 0.01, cuotas: 24 },
        };

        const { tasa, cuotas } = tasas[planPago];
        const pie =
            tipoPie === "porcentaje"
                ? totalAntesFinanciar * (valorPie / 100)
                : Number(valorPie);

        const montoFinanciar = totalAntesFinanciar - pie;
        const interesTotal = montoFinanciar * tasa * cuotas;
        const cuota =
            cuotas > 1 ? (montoFinanciar + interesTotal) / cuotas : totalAntesFinanciar;

        setResultado({
            potencia,
            subtotalEquipos,
            recargoTecho,
            subsidioValor,
            instalacionFinal,
            iva,
            costoEnvio,
            garantiaValor,
            totalAntesFinanciar,
            pie,
            interesTotal,
            cuota,
        });
    };

    const reiniciarCampos = () => {
        setPanelW("");
        setPaneles("");
        setPrecioInversor("");
        setPrecioBateria("");
        setCantidadBaterias("");
        setPrecioEstructura("");
        setInstalacionBase("");
        setPeso("");
        setTecho("teja");
        setRegion("RM");
        setSubsidio("ninguno");
        setEnvio("estandar");
        setGarantia("12");
        setPlanPago("contado");
        setTipoPie("porcentaje");
        setValorPie("10");
        setResultado(null);
    };

    return (
        <section
            id="demo-calculadora"
            className="py-5"
            style={{ backgroundColor: "#eef7f9" }}
        >
            <div className="container">
                <h2 className="text-center fw-bold mb-4">
                    DEMO Calculadora Integral de Sistemas Solares
                </h2>
                <p className="text-center text-muted mb-5">
                    Dimensiona tu sistema, conoce el costo estimado y solicita asesoría.
                </p>

                <div className="row g-4">
                    {/* Formulario */}
                    <div className="col-12 col-lg-6">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="fw-semibold mb-3">Formulario</h5>

                            <div className="row g-3">
                                {/* Fila 1 */}
                                <div className="col-md-6">
                                    <label className="form-label">Potencia panel (W)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ej: 450"
                                        value={panelW}
                                        onChange={(e) => setPanelW(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Cantidad paneles</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ej: 8"
                                        value={paneles}
                                        onChange={(e) => setPaneles(e.target.value)}
                                    />
                                </div>

                                {/* Fila 2 */}
                                <div className="col-md-6">
                                    <label className="form-label">Inversor ($)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ej: 650000"
                                        value={precioInversor}
                                        onChange={(e) => setPrecioInversor(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Batería ($)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ej: 320000"
                                        value={precioBateria}
                                        onChange={(e) => setPrecioBateria(e.target.value)}
                                    />
                                </div>

                                {/* Fila 3 */}
                                <div className="col-md-6">
                                    <label className="form-label">Cantidad baterías</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ej: 2"
                                        value={cantidadBaterias}
                                        onChange={(e) => setCantidadBaterias(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Estruct./cableado ($)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ej: 180000"
                                        value={precioEstructura}
                                        onChange={(e) => setPrecioEstructura(e.target.value)}
                                    />
                                </div>

                                {/* Fila 4 */}
                                <div className="col-md-6">
                                    <label className="form-label">Instalación base ($)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ej: 350000"
                                        value={instalacionBase}
                                        onChange={(e) => setInstalacionBase(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Peso envío (kg)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ej: 120"
                                        value={peso}
                                        onChange={(e) => setPeso(e.target.value)}
                                    />
                                </div>

                                {/* Fila 5 - Selects */}
                                <div className="col-md-6">
                                    <label className="form-label">Tipo de techo</label>
                                    <select
                                        className="form-select"
                                        value={techo}
                                        onChange={(e) => setTecho(e.target.value)}
                                    >
                                        <option value="teja">Teja / Asfalto (+5%)</option>
                                        <option value="zinc">Zinc / Planchas (+2%)</option>
                                        <option value="hormigon">Hormigón (+7%)</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Región</label>
                                    <select
                                        className="form-select"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                    >
                                        <option value="RM">RM ($5.000)</option>
                                        <option value="Norte">Norte ($9.000)</option>
                                        <option value="Sur">Sur ($10.000)</option>
                                        <option value="Austral">Austral ($15.000)</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">complejidad instalación</label>
                                    <select
                                        className="form-select"
                                        value={complejidad}
                                        onChange={(e) => setComplejidad(e.target.value)}
                                    >
                                        <option value="baja">Baja (0%)</option>
                                        <option value="media">Media (8)</option>
                                        <option value="alta">Alta (15%)</option>
                                    </select>
                                </div>

                                {/* Fila 6 - Subsidio y Envío */}
                                <div className="col-md-6">
                                    <label className="form-label">Subsidio</label>
                                    <select
                                        className="form-select"
                                        value={subsidio}
                                        onChange={(e) => setSubsidio(e.target.value)}
                                    >
                                        <option value="ninguno">Sin subsidio</option>
                                        <option value="residencial">Residencial (-8%)</option>
                                        <option value="pyme">PyME (-5%)</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Método envío</label>
                                    <select
                                        className="form-select"
                                        value={envio}
                                        onChange={(e) => setEnvio(e.target.value)}
                                    >
                                        <option value="estandar">Estándar</option>
                                        <option value="expres">Exprés (+20%)</option>
                                    </select>
                                </div>

                                {/* Fila 7 - Garantía y Plan de Pago */}
                                <div className="col-md-6">
                                    <label className="form-label">Garantía (meses)</label>
                                    <select
                                        className="form-select"
                                        value={garantia}
                                        onChange={(e) => setGarantia(e.target.value)}
                                    >
                                        <option value="12">12 meses (2%)</option>
                                        <option value="24">24 meses (4%)</option>
                                        <option value="36">36 meses (6%)</option>
                                    </select>
                                </div>

                                {/* Fila 8 - Plan de Pago y Pie */}
                                <div className="col-md-6">
                                    <label className="form-label">Plan de pago</label>
                                    <select
                                        className="form-select"
                                        value={planPago}
                                        onChange={(e) => setPlanPago(e.target.value)}
                                    >
                                        <option value="contado">Contado</option>
                                        <option value="6">6 cuotas (1.2% mensual)</option>
                                        <option value="12">12 cuotas (1.1% mensual)</option>
                                        <option value="24">24 cuotas (1.0% mensual)</option>
                                    </select>
                                </div>

                                {/* Fila 9 - Tipo de Pie y Valor */}
                                <div className="col-md-6">
                                    <label className="form-label">Tipo de pie</label>
                                    <select
                                        className="form-select"
                                        value={tipoPie}
                                        onChange={(e) => setTipoPie(e.target.value)}
                                    >
                                        <option value="porcentaje">Porcentaje (%)</option>
                                        <option value="monto">Monto fijo ($)</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Valor pie</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder={
                                            tipoPie === "porcentaje" ? "Ej: 10 (%)" : "Ej: 500000 ($)"
                                        }
                                        value={valorPie}
                                        onChange={(e) => setValorPie(e.target.value)}
                                    />
                                </div>

                                <div className="col-12 d-flex gap-2 mt-3">
                                    <button
                                        className="btn btn-success w-50 rounded-4 fw-semibold mt-3"
                                        onClick={calcular}
                                    >
                                        Calcular estimación
                                    </button>

                                    <button
                                        className="btn btn-outline-secondary w-50 rounded-4 fw-semibold mt-3"
                                        onClick={reiniciarCampos}
                                    >
                                        Reiniciar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resumen */}
                    <div className="col-12 col-lg-6">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="fw-semibold mb-3">Resumen de estimación</h5>
                            <table className="table table-striped table-bordered align-middle">
                                <tbody>
                                    <tr><th>Potencia estimada</th><td>{resultado ? `${resultado.potencia.toFixed(2)} kW` : "—"}</td></tr>
                                    <tr><th>Subtotal equipos</th><td>{resultado ? `$${resultado.subtotalEquipos.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>Recargo techo</th><td>{resultado ? `$${resultado.recargoTecho.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>Subsidio</th><td>{resultado ? `$${resultado.subsidioValor.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>Instalación final</th><td>{resultado ? `$${resultado.instalacionFinal.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>IVA (19%)</th><td>{resultado ? `$${resultado.iva.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>Envío</th><td>{resultado ? `$${resultado.costoEnvio.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>Garantía</th><td>{resultado ? `$${resultado.garantiaValor.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>Total antes de financiar</th><td>{resultado ? `$${resultado.totalAntesFinanciar.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>Pie</th><td>{resultado ? `$${resultado.pie.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>Interés total</th><td>{resultado ? `$${resultado.interesTotal.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th>Cuota mensual</th><td>{resultado ? `$${resultado.cuota.toLocaleString()}` : "—"}</td></tr>
                                    <tr><th className="text-success fw-bold">Total estimado</th><td className="text-success fw-bold">{resultado ? `$${resultado.totalAntesFinanciar.toLocaleString()}` : "—"}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}

export default CalculadoraIntegral;
