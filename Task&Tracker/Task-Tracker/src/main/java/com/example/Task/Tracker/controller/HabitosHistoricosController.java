package com.example.Task.Tracker.controller;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.HabitosHistoricos;
import com.example.Task.Tracker.repository.UsuarioRepository;
import com.example.Task.Tracker.service.HabitosHistoricosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/habitos_historicos")
public class HabitosHistoricosController {

    private final HabitosHistoricosService habitosHistoricosService;

    public HabitosHistoricosController(HabitosHistoricosService habitosHistoricosService) {
        this.habitosHistoricosService = habitosHistoricosService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<HabitosHistoricos>> buscarHabitosHistorico(@PathVariable Integer id) {
        return ResponseEntity.ok(habitosHistoricosService.getHabitosHistoricosByHabitoId(id));
    }

    @PostMapping()
    public ResponseEntity<HabitosHistoricos> salvarHabitosHistoricos(@RequestBody HabitosHistoricos habitosHistoricos) {
        return ResponseEntity.ok(habitosHistoricosService.save(habitosHistoricos));
    }
}
